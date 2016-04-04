"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CravenGiantBase = require("../setPOR/CravenGiant.js");

class CravenGiant extends CravenGiantBase {
  constructor(game) {
    super(game, "Craven Giant", "Tempest Remastered", "TPR");
  }
}

module.exports = CravenGiant;
