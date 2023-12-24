<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cuahangsach' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' vHaU)-4YJu)]]1n@8gpYO_&]Uf@o2^Zz?RvDp1P1[q.U>RAq(~~U})l9<nti087' );
define( 'SECURE_AUTH_KEY',  'wbF(}aQBOspD`5rO b=uU_pOL`J{LhWYUKeNaAsg$H[=OA#n?)H$fDnC-=(OVtYl' );
define( 'LOGGED_IN_KEY',    '_XXG$s,#{T]`G|!1la9*yM@^M5 y}8iNJX8!!3YXEOYWwu9yRzZlVDZd6X=wNf<9' );
define( 'NONCE_KEY',        'F18GMG.)/0*R4gA>(%]@9o>6X<-waE7J(S4|JUqF[m}YLXg>*U>wVL2E|i$ZHcD`' );
define( 'AUTH_SALT',        'dL4?N4cOI.h4q]kAi4rpR/7#2d/7SYK7Echx2D<#hC41=Tv7 =+Cm,[Kx>g/{W~/' );
define( 'SECURE_AUTH_SALT', 'o`3sf.NX1EfQ@G0I2O9Gt/q$pwO|BCvsQ%s8&]s%76LgVuI%,{&mJKV@Kkih<Cq+' );
define( 'LOGGED_IN_SALT',   'EV#J6__9_`EXx+F_f<8+ogWh++xA;4MKW>WG1,*/ff%ywa2: UY.OY6;Ze_[e!0X' );
define( 'NONCE_SALT',       '=:r_LlTc^_0OpD$|Gu97mHU%*ewm-;SK|]e`6Ce%,[INjY:r ZuNTq/8{k$|uyzN' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
