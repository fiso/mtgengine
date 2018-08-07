"use strict";
const Constants = require ("../../../Constants");
const PuppetStringsBase = require("../setDDE/PuppetStrings");

class PuppetStrings extends PuppetStringsBase {
  constructor (game) {
    super(game, "Puppet Strings", "Tempest", "TMP");
  }
}

module.exports = PuppetStrings;
