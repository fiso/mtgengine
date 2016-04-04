"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ResurrectionBase = require("../setCED/Resurrection.js");

class Resurrection extends ResurrectionBase {
  constructor(game) {
    super(game, "Resurrection", "Revised Edition", "3ED");
  }
}

module.exports = Resurrection;
