"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SabertoothWyvernBase = require("../setEXO/SabertoothWyvern.js");

class SabertoothWyvern extends SabertoothWyvernBase {
  constructor(game) {
    super(game, "Sabertooth Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = SabertoothWyvern;
