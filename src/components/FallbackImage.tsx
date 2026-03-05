import { useEffect, useState } from 'react'

type FallbackImageProps = {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export function FallbackImage({
  src,
  alt,
  className = '',
  fallbackSrc = '/fallback.png',
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc)
        }
      }}
    />
  )
}
