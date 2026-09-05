import { useCallback, useRef, useState } from 'react';
import { UploadCloud, ImageUp, X, Camera } from 'lucide-react';

export default function UploadArea({ onFileSelected }) {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFiles = useCallback(
    (fileList) => {
      const file = fileList?.[0];
      if (!file) return;
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        setError('Unsupported file type. Please upload a PNG or JPG/JPEG image.');
        return;
      }
      setError('');
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreview(url);
      onFileSelected?.(file, url);
    },
    [onFileSelected]
  );

  const clear = () => {
    setPreview(null);
    setFileName('');
    onFileSelected?.(null, null);
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div
          data-testid="dropzone-label-upload"
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            handleFiles(e.dataTransfer.files);
          }}
          className={`relative rounded-2xl border-2 border-dashed transition-colors
            flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20
            ${dragActive ? 'border-signal-cyan bg-signal-cyan/5' : 'border-line hover:border-ink-700 bg-base-800/40'}`}
        >
          <div className="w-16 h-16 rounded-2xl bg-signal-cyan/10 border border-signal-cyan/25 flex items-center justify-center mb-5">
            <UploadCloud className="w-7 h-7 text-signal-cyan" strokeWidth={1.75} />
          </div>
          <p className="text-ink-100 font-medium mb-1.5">Drag and drop a product image</p>
          <p className="text-ink-500 text-sm mb-6">or choose an option below to select a file</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              data-testid="button-browse-files"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-lg bg-signal-cyan text-base-950 text-sm font-medium px-4 py-2.5 hover:bg-signal-cyan/90 transition-colors"
            >
              <ImageUp className="w-4 h-4" strokeWidth={2.25} />
              Browse Files
            </button>
            <button
              data-testid="button-use-camera"
              onClick={() => cameraInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-lg border border-line text-ink-100 text-sm font-medium px-4 py-2.5 hover:bg-base-800 transition-colors"
            >
              <Camera className="w-4 h-4" strokeWidth={2.25} />
              Use Camera
            </button>
          </div>

          <p className="text-ink-700 text-xs mt-6">Supported formats: PNG, JPG, JPEG · Max 10 MB</p>

          <input
            data-testid="input-label-file"
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <input
            data-testid="input-camera-file"
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-base-800/40 p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-ink-300 truncate pr-3">{fileName}</p>
            <button data-testid="button-clear-upload" onClick={clear} className="text-ink-500 hover:text-signal-red shrink-0">
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
          <div className="rounded-xl overflow-hidden border border-line bg-base-950 flex items-center justify-center max-h-[420px]">
            <img src={preview} alt="Uploaded product preview" className="max-h-[420px] w-full object-contain" />
          </div>
        </div>
      )}

      {error && <p className="text-signal-red text-sm mt-3">{error}</p>}
    </div>
  );
}
