"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VodalianSoldiersBase = require("../set6ED/VodalianSoldiers.js");

class VodalianSoldiers extends VodalianSoldiersBase {
  constructor(game) {
    super(game, "Vodalian Soldiers", "Fifth Edition", "5ED");
  }
}

module.exports = VodalianSoldiers;
