'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'
import DirectionalIcon from '@/components/DirectionalIcon'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const VisitsByDay = ({ serverMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.16)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.16)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.16)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.16)`)
    ],
    grid: {
      show: false,
      padding: {
        top: -25,
        left: -7,
        right: -4,
        bottom: -12
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: '50%'
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      labels: {
        style: { colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`), fontSize: '13px' }
      }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: {
            height: 193
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Visits by Day'
        subheader='Total 248.5k Visits'
        action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      />
      <CardContent className='flex flex-col gap-6'>
        <AppReactApexCharts
          type='bar'
          height={235}
          options={options}
          series={[{ data: [38, 55, 48, 65, 80, 38, 48] }]}
        />
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <Typography color='text.primary' className='font-medium'>
              Most Visited Day
            </Typography>
            <Typography variant='body2'>Total 62.4k Visits on Thursday</Typography>
          </div>
          <CustomAvatar skin='light' color='primary' variant='rounded'>
            <DirectionalIcon ltrIconClass='ri-arrow-right-s-line' rtlIconClass='ri-arrow-left-s-line' />
          </CustomAvatar>
        </div>
      </CardContent>
    </Card>
  )
}

export default VisitsByDay
