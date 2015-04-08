/* */ 
(function(Buffer) {
  var test = require("tape");
  var crypto1 = require("../index");
  var rsa = {
    "private": "2d2d2d2d2d424547494e205253412050524956415445204b45592d2d2d2d2d0a4d4949456a77494241414b422f6779376d6a615767506546645659445a5752434139424e69763370506230657332372b464b593068737a4c614f7734374578430a744157704473483438545841667948425977424c67756179666b344c4749757078622b43474d62526f337845703043626659314a62793236543976476a5243310a666f484444554a4738347561526279487161663469367a74346756522b786c4145496a6b614641414b38634f6f58415431435671474c4c6c6a554363684c38500a6a61486a2f7972695a2f53377264776c49334c6e41427877776d4c726d522f7637315774706d4f2f614e47384e2b31706f2b5177616768546b79513539452f5a0a7641754f6b4657486f6b32712f523650594161326a645a397a696d3046714f502b6e6b5161454452624246426d4271547635664647666b32577341664b662f520a47302f5646642b5a654d353235315465547658483639356e6c53476175566c3941674d42414145436766344c725748592f6c35346f7554685a577676627275670a70667a36734a583267396c3779586d576c455773504543566f2f375355627059467074364f5a7939397a53672b494b624771574b6664686f4b725477495674430a4c30595a304e6c6d646e414e53497a30726f785147375a786b4c352b764853772f506d443978345577662b437a38684154436d4e42763171633630646b7975570a34434c71653732716154695657526f4f316961675167684e634c6f6f36765379363545784c614344545068613779753276773468465a705769456a57346478660a7246644c696978353242433836596c416c784d452f724c6738494a5676696c62796f39615764586d784f6155544c527636506b4644312f6756647738563951720a534c4e39466c4b326b6b6a695830647a6f6962765a7733744d6e74337979644178305838372b734d5256616843316270336b56507a3448793045575834514a2f0a504d33317647697549546b324e43643531445874314c746e324f503546614a536d4361456a6830586b5534716f7559796a585774384275364254436c327675610a466730556a6939432b496b504c6d61554d624d494f7761546b386357714c74685378734c6537304a354f6b477267664b554d2f772b4248483150742f506a7a6a0a432b2b6c306b6946614f5644566141563947704c504c43426f4b2f50433952622f72784d4d6f43434e774a2f4e5a756564496e793277334c4d69693737682f540a7a53766572674e47686a5936526e7661386c4c584a36646c726b6350417970733367577778716a344e5230542b474d3062445550564c62374d303758563753580a7637564a476d35324a625247774d3173732b72385854544e656d65476b2b5752784737546774734d715947584c66423851786b2f66352f4d63633030546c38750a7758464e7366784a786d7436416273547233673336774a2f49684f6e69627a3941642b6e63686c426e4e3351655733434b48717a61523138766f717674566d320a6b4a66484b31357072482f7353476d786d6945476772434a545a78744462614e434f372f56426a6e4b756455554968434177734c747571302f7a7562397641640a384731736366497076357161534e7a6d4b6f5838624f77417276725336775037794b726354737557496c484438724a5649374945446e516f5470354738664b310a68774a2f4d4968384d35763072356455594576366f494a5747636c65364148314a6d73503557496166677137325a32323838704863434648774e59384467394a0a3736517377564c6e556850546c6d6d33454f4f50474574616d32694144357230416679746c62346c624e6f51736a32737a65584f4e4458422b366f7565616a680a564e454c55723848635350356c677a525a6a4a57366146497a6a394c44526d516e55414f6a475358564f517445774a2f4d43515a374e2f763464494b654452410a3864385545785a332b674748756d7a697a7447524a30745172795a483250616b50354937562b316c377145556e4a3263336d462b65317634314570394c4376680a627a72504b773964786831386734622b37624d707357506e7372614b6836697078633761614f615a5630447867657a347a635a753050316f6c4f30634e334b4d0a6e784a305064733352386241684e43446453324a5a61527035513d3d0a2d2d2d2d2d454e44205253412050524956415445204b45592d2d2d2d2d0a",
    "public": "2d2d2d2d2d424547494e20525341205055424c4943204b45592d2d2d2d2d0a4d49494242674b422f6779376d6a615767506546645659445a5752434139424e69763370506230657332372b464b593068737a4c614f773437457843744157700a4473483438545841667948425977424c67756179666b344c4749757078622b43474d62526f337845703043626659314a62793236543976476a524331666f48440a44554a4738347561526279487161663469367a74346756522b786c4145496a6b614641414b38634f6f58415431435671474c4c6c6a554363684c38506a61486a0a2f7972695a2f53377264776c49334c6e41427877776d4c726d522f7637315774706d4f2f614e47384e2b31706f2b5177616768546b79513539452f5a7641754f0a6b4657486f6b32712f523650594161326a645a397a696d3046714f502b6e6b5161454452624246426d4271547635664647666b32577341664b662f5247302f560a46642b5a654d353235315465547658483639356e6c53476175566c3941674d424141453d0a2d2d2d2d2d454e4420525341205055424c4943204b45592d2d2d2d2d0a"
  };
  var crypto2 = require("public-encrypt/browser");
  rsa.private = new Buffer(rsa.private, 'hex');
  rsa.public = new Buffer(rsa.public, 'hex');
  var encrypted = '0bcd6462ad7a563be2d42b0b73e0b0a163886304e7723b025f97605144fe1781e84acdc4031327d6bccd67fe13183e8fbdc8c5fe947b49d011ce3ebb08b11e83b87a77328ca57ee77cfdc78743b0749366643d7a21b2abcd4aa32dee9832938445540ee3007b7a70191c8dc9ff2ad76fe8dfaa5362d9d2c4b31a67b816d7b7970a293cb95bf3437a301bedb9f431b7075aa2f9df77b4385bea2a37982beda467260b384a58258b5eb4e36a0e0bf7dff83589636f5f97bf542084f0f76868c9f3f989a27fee5b8cd2bfee0bae1eae958df7c3184e5a40fda101196214f371606feca4330b221f30577804bbd4f61578a84e85dcd298849f509e630d275280';
  test('publicEncrypt/privateDecrypt', function(t) {
    t.test('can decrypt', function(t) {
      t.plan(2);
      t.equals(crypto1.privateDecrypt(rsa.private, new Buffer(encrypted, 'hex')).toString(), 'hello there I am a nice message', 'decrypt it properly');
      t.equals(crypto2.privateDecrypt(rsa.private, new Buffer(encrypted, 'hex')).toString(), 'hello there I am a nice message', 'decrypt it properly');
    });
    t.test('can round trip', function(t) {
      t.plan(2);
      var msg = 'this is a message';
      t.equals(crypto1.privateDecrypt(rsa.private, crypto2.publicEncrypt(rsa.public, new Buffer(msg))).toString(), msg, 'round trip it');
      t.equals(crypto2.privateDecrypt(rsa.private, crypto1.publicEncrypt(rsa.public, new Buffer(msg))).toString(), msg, 'round trip it');
    });
  });
  test('privateEncrypt/publicDecrypt', function(t) {
    t.test('can round trip', function(t) {
      t.plan(2);
      var msg = 'this is a message';
      t.equals(crypto1.publicDecrypt(rsa.public, crypto2.privateEncrypt(rsa.private, new Buffer(msg))).toString(), msg, 'round trip it');
      t.equals(crypto2.publicDecrypt(rsa.public, crypto1.privateEncrypt(rsa.private, new Buffer(msg))).toString(), msg, 'round trip it');
    });
  });
})(require("buffer").Buffer);
