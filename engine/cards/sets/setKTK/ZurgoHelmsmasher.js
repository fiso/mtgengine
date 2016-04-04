"use strict";
const Constants = require ("../../../Constants");
const ZurgoHelmsmasherBase = require("../setDDN/ZurgoHelmsmasher");

class ZurgoHelmsmasher extends ZurgoHelmsmasherBase {
  constructor(game) {
    super(game, "Zurgo Helmsmasher", "Khans of Tarkir", "KTK");
  }
}

module.exports = ZurgoHelmsmasher;
