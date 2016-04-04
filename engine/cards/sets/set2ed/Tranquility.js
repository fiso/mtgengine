"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilityBase = require("../setBRB/Tranquility.js");

class Tranquility extends TranquilityBase {
  constructor(game) {
    super(game, "Tranquility", "Unlimited Edition", "2ED");
  }
}

module.exports = Tranquility;
