"use strict";
const Constants = require ("../../../Constants");
const ZurgoHelmsmasherBase = require("../setDDN/ZurgoHelmsmasher");

class ZurgoHelmsmasher extends ZurgoHelmsmasherBase {
  constructor (game) {
    super(game, "Zurgo Helmsmasher", "Prerelease Events", "pPRE");
  }
}

module.exports = ZurgoHelmsmasher;
