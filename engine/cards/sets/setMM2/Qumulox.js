"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QumuloxBase = require("../setDDF/Qumulox.js");

class Qumulox extends QumuloxBase {
  constructor(game) {
    super(game, "Qumulox", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Qumulox;
