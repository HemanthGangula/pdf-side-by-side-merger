import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'PDF Side-by-Side Merger - Free, Private, No Uploads'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {/* Document icons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            {/* Left document */}
            <div
              style={{
                width: '140px',
                height: '180px',
                background: 'white',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px 20px',
                gap: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ width: '100px', height: '14px', background: '#93c5fd', borderRadius: '7px' }} />
              <div style={{ width: '80px', height: '14px', background: '#bfdbfe', borderRadius: '7px' }} />
              <div style={{ width: '90px', height: '14px', background: '#93c5fd', borderRadius: '7px' }} />
              <div style={{ width: '70px', height: '14px', background: '#bfdbfe', borderRadius: '7px' }} />
              <div style={{ width: '100px', height: '14px', background: '#93c5fd', borderRadius: '7px' }} />
            </div>

            {/* Plus sign */}
            <div
              style={{
                fontSize: '60px',
                color: 'white',
                fontWeight: 'bold',
                opacity: 0.9,
              }}
            >
              +
            </div>

            {/* Right document */}
            <div
              style={{
                width: '140px',
                height: '180px',
                background: 'white',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px 20px',
                gap: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ width: '100px', height: '14px', background: '#a5b4fc', borderRadius: '7px' }} />
              <div style={{ width: '85px', height: '14px', background: '#c7d2fe', borderRadius: '7px' }} />
              <div style={{ width: '95px', height: '14px', background: '#a5b4fc', borderRadius: '7px' }} />
              <div style={{ width: '75px', height: '14px', background: '#c7d2fe', borderRadius: '7px' }} />
              <div style={{ width: '100px', height: '14px', background: '#a5b4fc', borderRadius: '7px' }} />
            </div>

            {/* Arrow */}
            <div
              style={{
                fontSize: '50px',
                color: 'white',
                opacity: 0.9,
              }}
            >
              →
            </div>

            {/* Merged document */}
            <div
              style={{
                width: '280px',
                height: '180px',
                background: 'white',
                borderRadius: '12px',
                display: 'flex',
                padding: '25px 15px',
                gap: '15px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Left side of merged */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <div style={{ width: '100%', height: '14px', background: '#93c5fd', borderRadius: '7px' }} />
                <div style={{ width: '80%', height: '14px', background: '#bfdbfe', borderRadius: '7px' }} />
                <div style={{ width: '90%', height: '14px', background: '#93c5fd', borderRadius: '7px' }} />
                <div style={{ width: '70%', height: '14px', background: '#bfdbfe', borderRadius: '7px' }} />
                <div style={{ width: '100%', height: '14px', background: '#93c5fd', borderRadius: '7px' }} />
              </div>
              {/* Divider */}
              <div style={{ width: '2px', background: '#e5e7eb' }} />
              {/* Right side of merged */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <div style={{ width: '100%', height: '14px', background: '#a5b4fc', borderRadius: '7px' }} />
                <div style={{ width: '85%', height: '14px', background: '#c7d2fe', borderRadius: '7px' }} />
                <div style={{ width: '95%', height: '14px', background: '#a5b4fc', borderRadius: '7px' }} />
                <div style={{ width: '75%', height: '14px', background: '#c7d2fe', borderRadius: '7px' }} />
                <div style={{ width: '100%', height: '14px', background: '#a5b4fc', borderRadius: '7px' }} />
              </div>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              PDF Side-by-Side Merger
            </h1>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  color: '#bfdbfe',
                  fontWeight: '500',
                }}
              >
                Free
              </span>
              <span style={{ color: '#60a5fa', fontSize: '24px' }}>•</span>
              <span
                style={{
                  fontSize: '24px',
                  color: '#bfdbfe',
                  fontWeight: '500',
                }}
              >
                Private
              </span>
              <span style={{ color: '#60a5fa', fontSize: '24px' }}>•</span>
              <span
                style={{
                  fontSize: '24px',
                  color: '#bfdbfe',
                  fontWeight: '500',
                }}
              >
                No Uploads
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
