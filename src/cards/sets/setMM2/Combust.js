"use strict";
const Constants = require ("../../../Constants");
const CombustBase = require("../setM11/Combust");

class Combust extends CombustBase {
  constructor (game) {
    super(game, "Combust", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Combust;
