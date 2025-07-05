Get-ChildItem -Recurse -Filter *.tsx -Path src | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  $content = $content `
    -replace 'bg-indigo-600', 'bg-primary-600' `
    -replace 'bg-indigo-700', 'bg-primary-700' `
    -replace 'text-indigo-600', 'text-primary-600' `
    -replace 'dark:text-indigo-400', 'dark:text-primary-400' `
    -replace 'hover:text-indigo-600', 'hover:text-primary-600' `
    -replace 'hover:bg-indigo-700', 'hover:bg-primary-700' `
    -replace 'bg-purple-600', 'bg-secondary-600' `
    -replace 'bg-purple-700', 'bg-secondary-700' `
    -replace 'bg-green-600', 'bg-success-600' `
    -replace 'bg-green-700', 'bg-success-700'
  Set-Content -LiteralPath $_.FullName -Value $content
}
