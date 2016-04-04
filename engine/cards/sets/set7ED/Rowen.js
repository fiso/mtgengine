"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RowenBase = require("../set6ED/Rowen.js");

class Rowen extends RowenBase {
  constructor(game) {
    super(game, "Rowen", "Seventh Edition", "7ED");
  }
}

module.exports = Rowen;
