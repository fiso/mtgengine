"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PuppetStringsBase = require("../setDDE/PuppetStrings.js");

class PuppetStrings extends PuppetStringsBase {
  constructor(game) {
    super(game, "Puppet Strings", "Tempest", "TMP");
  }
}

module.exports = PuppetStrings;
