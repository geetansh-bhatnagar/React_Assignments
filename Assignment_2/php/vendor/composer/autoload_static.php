<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfaebe197860f8b6175c6ab5b0c5a48dc
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfaebe197860f8b6175c6ab5b0c5a48dc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfaebe197860f8b6175c6ab5b0c5a48dc::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
