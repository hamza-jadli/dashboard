import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import { Chart } from 'src/components/Chart';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${
    theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
  };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

function AccountBalance() {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    },
    colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val}%`;
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [10, 20, 25, 45];

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Account Balance
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                584.23 MAD
              </Typography>

              <Box
                display="flex"
                sx={{
                  py: 4
                }}
                alignItems="center"
              >
                <AvatarSuccess
                  sx={{
                    mr: 2
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">+ 69 MAD</Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button fullWidth variant="outlined">
                  Send
                </Button>
              </Grid>
              <Grid sm item>
                <Button fullWidth variant="contained">
                  Receive
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>
          <Box py={4} pr={4} flex={1}>
            <Grid container spacing={0}>
              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Chart
                  height={250}
                  options={chartOptions}
                  series={chartSeries}
                  type="donut"
                />
              </Grid>
              <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List
                  disablePadding
                  sx={{
                    width: '100%'
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="BTC"
                        src="https://cdn.shopify.com/s/files/1/0458/6386/2439/products/51Bz60iDotL._SY264_BO1_204_203_200_QL40_ML2_-min.jpg?v=1631701492"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="The Compound Effect"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="by Darren Hardy "
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        20%
                      </Typography>
                      <Text color="success">+2.54%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="XRP"
                        src="https://cdn.shopify.com/s/files/1/0458/6386/2439/products/blueocean-min.jpg?v=1609442324"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="blue ocean strategy"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="by W. Chan Kim"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        10%
                      </Typography>
                      <Text color="error">-1.22%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="ADA"
                        src="https://images-na.ssl-images-amazon.com/images/I/81qwIF9iyrL._AC_UL600_SR600,600_.jpg"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Fairy Tale Kindle Edition"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="by Stephen King"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        40%
                      </Typography>
                      <Text color="success">+10.50%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="ETH"
                        src="data:image/jpeg;base64,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"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="the song of ice and fire"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="george RR martin"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        30%
                      </Typography>
                      <Text color="error">-12.38%</Text>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
