"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanGiantBase = require("../setICE/KarplusanGiant.js");

class KarplusanGiant extends KarplusanGiantBase {
  constructor(game) {
    super(game, "Karplusan Giant", "Masters Edition II", "ME2");
  }
}

module.exports = KarplusanGiant;
