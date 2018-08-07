"use strict";
const Constants = require ("../../../Constants");
const ThundermawHellkiteBase = require("../setIMA/ThundermawHellkite");

class ThundermawHellkite extends ThundermawHellkiteBase {
  constructor (game) {
    super(game, "Thundermaw Hellkite", "Magic 2013", "M13");
  }
}

module.exports = ThundermawHellkite;
