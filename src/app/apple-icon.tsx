import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '36px',
          position: 'relative',
        }}
      >
        {/* Left document */}
        <div
          style={{
            position: 'absolute',
            left: '25px',
            top: '30px',
            width: '60px',
            height: '100px',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 10px 10px 10px',
            gap: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ width: '40px', height: '8px', background: '#93c5fd', borderRadius: '4px' }} />
          <div style={{ width: '30px', height: '8px', background: '#93c5fd', borderRadius: '4px' }} />
          <div style={{ width: '40px', height: '8px', background: '#93c5fd', borderRadius: '4px' }} />
        </div>

        {/* Document fold - left */}
        <div
          style={{
            position: 'absolute',
            left: '65px',
            top: '30px',
            width: '20px',
            height: '20px',
            background: '#e0e7ff',
            borderRadius: '0 0 0 8px',
          }}
        />

        {/* Right document */}
        <div
          style={{
            position: 'absolute',
            right: '25px',
            top: '50px',
            width: '60px',
            height: '100px',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 10px 10px 10px',
            gap: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ width: '40px', height: '8px', background: '#93c5fd', borderRadius: '4px' }} />
          <div style={{ width: '30px', height: '8px', background: '#93c5fd', borderRadius: '4px' }} />
          <div style={{ width: '40px', height: '8px', background: '#93c5fd', borderRadius: '4px' }} />
        </div>

        {/* Document fold - right */}
        <div
          style={{
            position: 'absolute',
            right: '45px',
            top: '50px',
            width: '20px',
            height: '20px',
            background: '#e0e7ff',
            borderRadius: '0 0 0 8px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
