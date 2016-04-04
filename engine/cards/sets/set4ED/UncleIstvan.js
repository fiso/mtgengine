"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UncleIstvan extends Card {
  constructor(game) {
    super(game, "Uncle Istvan", "Fourth Edition", "4ED");
  }
}

module.exports = UncleIstvan;
