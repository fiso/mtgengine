"use strict";
const Constants = require ("../../../Constants");
const GorehornMinotaursBase = require("../setDDL/GorehornMinotaurs");

class GorehornMinotaurs extends GorehornMinotaursBase {
  constructor (game) {
    super(game, "Gorehorn Minotaurs", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GorehornMinotaurs;
