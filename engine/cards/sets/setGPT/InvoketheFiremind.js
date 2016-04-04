"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InvoketheFiremindBase = require("../setDDJ/InvoketheFiremind.js");

class InvoketheFiremind extends InvoketheFiremindBase {
  constructor(game) {
    super(game, "Invoke the Firemind", "Guildpact", "GPT");
  }
}

module.exports = InvoketheFiremind;
