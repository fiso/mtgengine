"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifetapBase = require("../setCED/Lifetap.js");

class Lifetap extends LifetapBase {
  constructor(game) {
    super(game, "Lifetap", "Fourth Edition", "4ED");
  }
}

module.exports = Lifetap;
