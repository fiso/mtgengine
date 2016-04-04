"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianPortalBase = require("../setALL/PhyrexianPortal.js");

class PhyrexianPortal extends PhyrexianPortalBase {
  constructor(game) {
    super(game, "Phyrexian Portal", "Masters Edition II", "ME2");
  }
}

module.exports = PhyrexianPortal;
