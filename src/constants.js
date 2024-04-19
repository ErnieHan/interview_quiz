export const baseUrlMap = {
  dev: {
    host_url: process.env.REACT_APP_API_HOST_NAME_DEV,
    cas_host_url: process.env.REACT_APP_CAS_HOST_DEV
  },
  testing: {
    host_url: process.env.REACT_APP_API_HOST_NAME_TESTING,
    cas_host_url: process.env.REACT_APP_CAS_HOST_TESTING
  },
  uat: {
    host_url: process.env.REACT_APP_API_HOST_NAME_UAT,
    cas_host_url: process.env.REACT_APP_CAS_HOST_UAT
  },
  prod: {
    host_url: process.env.REACT_APP_API_HOST_NAME_PROD,
    cas_host_url: process.env.REACT_APP_CAS_HOST_PROD
  },
  ci: {
    host_url: process.env.REACT_APP_API_HOST_NAME_CI,
    cas_host_url: process.env.REACT_APP_CAS_HOST_CI
  }
}

const build_env = process.env.REACT_APP_BUILD_ENV.trim()
export const HOST_URL = baseUrlMap[build_env].host_url
export const CAS_HOST_URL = baseUrlMap[build_env].cas_host_url
