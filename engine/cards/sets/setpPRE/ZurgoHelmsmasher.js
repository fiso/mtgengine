"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZurgoHelmsmasherBase = require("../setDDN/ZurgoHelmsmasher.js");

class ZurgoHelmsmasher extends ZurgoHelmsmasherBase {
  constructor(game) {
    super(game, "Zurgo Helmsmasher", "Prerelease Events", "pPRE");
  }
}

module.exports = ZurgoHelmsmasher;
