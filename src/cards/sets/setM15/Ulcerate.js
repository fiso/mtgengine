"use strict";
const Constants = require ("../../../Constants");
const UlcerateBase = require("../setIMA/Ulcerate");

class Ulcerate extends UlcerateBase {
  constructor (game) {
    super(game, "Ulcerate", "Magic 2015", "M15");
  }
}

module.exports = Ulcerate;
