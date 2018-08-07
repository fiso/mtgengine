"use strict";
const Constants = require ("../../../Constants");
const UncleIstvanBase = require("../setTSB/UncleIstvan");

class UncleIstvan extends UncleIstvanBase {
  constructor (game) {
    super(game, "Uncle Istvan", "Fourth Edition", "4ED");
  }
}

module.exports = UncleIstvan;
