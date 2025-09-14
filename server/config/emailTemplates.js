// =======================
// Email & Password Templates
// =======================

// Email verification template (HTML with placeholders {{email}}, {{otp}})
export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Email Verify</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    /* Basic email styles */
    body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background: #E5E5E5; }
    table, td { border-collapse: collapse; }
    .container { width: 100%; max-width: 500px; margin: 70px 0px; background-color: #ffffff; }
    .main-content { padding: 48px 30px 40px; color: #000000; }
    .button { width: 100%; background: #22D172; padding: 10px 0; color: #fff; font-size: 14px; font-weight: bold; text-align: center; border-radius: 7px; }
    @media only screen and (max-width: 480px) {
      .container { width: 80% !important; }
      .button { width: 50% !important; }
    }
  </style>
</head>
<body>
  <!-- OTP email content -->
  <table width="100%" align="center" bgcolor="#F6FAFB">
    <tr>
      <td align="center">
        <table class="container" width="600">
          <tr>
            <td class="main-content">
              <table width="100%">
                <tr><td style="font-size: 18px; font-weight: bold;">Verify your email</td></tr>
                <tr><td>You are just one step away to verify your account for this email: <span style="color: #4C83EE;">{{email}}</span>.</td></tr>
                <tr><td style="font-weight: 700;">Use below OTP to verify your account.</td></tr>
                <tr><td><p class="button">{{otp}}</p></td></tr>
                <tr><td>This OTP is valid for 30 minutes.</td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

// Password reset template (HTML with placeholders {{email}}, {{otp}})
export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    /* Basic email styles */
    body { margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background: #E5E5E5; }
    table, td { border-collapse: collapse; }
    .container { width: 100%; max-width: 500px; margin: 70px 0px; background-color: #ffffff; }
    .main-content { padding: 48px 30px 40px; color: #000000; }
    .button { width: 100%; background: #22D172; padding: 10px 0; color: #fff; font-size: 14px; font-weight: bold; text-align: center; border-radius: 7px; }
    @media only screen and (max-width: 480px) {
      .container { width: 80% !important; }
      .button { width: 50% !important; }
    }
  </style>
</head>
<body>
  <!-- OTP reset email content -->
  <table width="100%" align="center" bgcolor="#F6FAFB">
    <tr>
      <td align="center">
        <table class="container" width="600">
          <tr>
            <td class="main-content">
              <table width="100%">
                <tr><td style="font-size: 18px; font-weight: bold;">Forgot your password?</td></tr>
                <tr><td>We received a password reset request for your account: <span style="color: #4C83EE;">{{email}}</span>.</td></tr>
                <tr><td style="font-weight: 700;">Use the OTP below to reset the password.</td></tr>
                <tr><td><p class="button">{{otp}}</p></td></tr>
                <tr><td>The password reset OTP is valid for 30 minutes.</td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
