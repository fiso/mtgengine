"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodlordofVaasgothBase = require("../setM12/BloodlordofVaasgoth.js");

class BloodlordofVaasgoth extends BloodlordofVaasgothBase {
  constructor(game) {
    super(game, "Bloodlord of Vaasgoth", "Prerelease Events", "pPRE");
  }
}

module.exports = BloodlordofVaasgoth;
