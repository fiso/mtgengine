"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BadMoonBase = require("../setCED/BadMoon.js");

class BadMoon extends BadMoonBase {
  constructor(game) {
    super(game, "Bad Moon", "Revised Edition", "3ED");
  }
}

module.exports = BadMoon;
