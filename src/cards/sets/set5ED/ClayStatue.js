"use strict";
const Constants = require ("../../../Constants");
const ClayStatueBase = require("../setATQ/ClayStatue");

class ClayStatue extends ClayStatueBase {
  constructor (game) {
    super(game, "Clay Statue", "Fifth Edition", "5ED");
  }
}

module.exports = ClayStatue;
