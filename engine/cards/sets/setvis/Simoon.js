"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimoonBase = require("../setINV/Simoon.js");

class Simoon extends SimoonBase {
  constructor(game) {
    super(game, "Simoon", "Visions", "VIS");
  }
}

module.exports = Simoon;
