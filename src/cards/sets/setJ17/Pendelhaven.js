"use strict";
const Constants = require ("../../../Constants");
const PendelhavenBase = require("../setA25/Pendelhaven");

class Pendelhaven extends PendelhavenBase {
  constructor (game) {
    super(game, "Pendelhaven", "Judge Gift Cards 2017", "J17");
  }
}

module.exports = Pendelhaven;
