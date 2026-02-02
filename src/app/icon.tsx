import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#2563eb',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          position: 'relative',
        }}
      >
        {/* Left document */}
        <div
          style={{
            position: 'absolute',
            left: '4px',
            top: '5px',
            width: '11px',
            height: '19px',
            background: 'white',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            padding: '6px 2px 2px 2px',
            gap: '2px',
          }}
        >
          <div style={{ width: '7px', height: '2px', background: '#93c5fd', borderRadius: '1px' }} />
          <div style={{ width: '5px', height: '2px', background: '#93c5fd', borderRadius: '1px' }} />
          <div style={{ width: '7px', height: '2px', background: '#93c5fd', borderRadius: '1px' }} />
        </div>

        {/* Right document */}
        <div
          style={{
            position: 'absolute',
            right: '4px',
            top: '8px',
            width: '11px',
            height: '19px',
            background: 'white',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            padding: '6px 2px 2px 2px',
            gap: '2px',
          }}
        >
          <div style={{ width: '7px', height: '2px', background: '#93c5fd', borderRadius: '1px' }} />
          <div style={{ width: '5px', height: '2px', background: '#93c5fd', borderRadius: '1px' }} />
          <div style={{ width: '7px', height: '2px', background: '#93c5fd', borderRadius: '1px' }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
