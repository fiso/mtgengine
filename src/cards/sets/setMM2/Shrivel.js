"use strict";
const Constants = require ("../../../Constants");
const ShrivelBase = require("../setM14/Shrivel");

class Shrivel extends ShrivelBase {
  constructor (game) {
    super(game, "Shrivel", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Shrivel;
