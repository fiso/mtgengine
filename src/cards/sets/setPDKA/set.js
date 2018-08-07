"use strict";
module.exports = {
  Gravecrawler: require("./Gravecrawler"),
  MondronenShamanTovolarsMagehunter: require("./MondronenShamanTovolarsMagehunter"),
  RavenousDemonArchdemonofGreed: require("./RavenousDemonArchdemonofGreed"),
  StranglerootGeist: require("./StranglerootGeist"),
  ZombieApocalypse: require("./ZombieApocalypse")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPDKA = module.exports;}