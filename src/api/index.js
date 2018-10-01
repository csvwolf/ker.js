const list = {
  'ACCOUNT_QUOTA': '/quota', // 配额相关
  'ACCOUNT_BALANCE': '/balance', // 获得账户余额
  'SSH_LIST': '/listSshKey', // 列出所有公钥
  'SSH_CREATE': '/createSshKey', // 新建公钥
  'SSH_DELETE': '/deleteSshKey', // 删除公钥
  'SERVERS_LIST': '/listServers', // 列出服务器
  'SERVER_GET': '/getServer', // 获取指定服务器
  'SERVER_CREATE': '/createServer', // 创建新服务器
  'SERVER_SET_POWER': '/setPower', // 执行电源操作
  'SERVER_SET': '/setServer', // 设置云服务器硬件
  'SERVER_REINSTALL': '/reinstallServer', // 重装云服务器系统
  'SERVER_DELETE': '/deleteServer', // 删除云服务器
  'MONITOR_CPU': '/cpuMonitor', // 获得 CPU 监控数据
  'MONITOR_NET': '/netMonitor', // 获得公网带宽监控数据
  'MONITOR_NAT': '/natMonitor', // 获取内网带宽监控数据
  'MONITOR_IO': '/IOMonitor', // 获取硬盘 IOPS 统计数据
  'DNS_LIST': '/dnsGetRecords', // 获取解析记录列表
  'DNS_ADD': '/dnsAddRecord', // 添加解析记录
  'DNS_EDIT': '/dnsEditRecord', // 修改解析记录
  'DNS_DELETE': '/dnsDeleteRecord' // 删除解析记录
}

module.exports = list
