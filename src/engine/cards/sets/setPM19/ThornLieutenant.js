"use strict";
const Constants = require ("../../../Constants");
const ThornLieutenantBase = require("../setM19/ThornLieutenant");

class ThornLieutenant extends ThornLieutenantBase {
  constructor (game) {
    super(game, "Thorn Lieutenant", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ThornLieutenant;
