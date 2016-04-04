"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KudzuBase = require("../setCED/Kudzu.js");

class Kudzu extends KudzuBase {
  constructor(game) {
    super(game, "Kudzu", "Revised Edition", "3ED");
  }
}

module.exports = Kudzu;
