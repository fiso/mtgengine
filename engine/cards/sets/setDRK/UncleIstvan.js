"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UncleIstvanBase = require("../set4ED/UncleIstvan.js");

class UncleIstvan extends UncleIstvanBase {
  constructor(game) {
    super(game, "Uncle Istvan", "The Dark", "DRK");
  }
}

module.exports = UncleIstvan;
