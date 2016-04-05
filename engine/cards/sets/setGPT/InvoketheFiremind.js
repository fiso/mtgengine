"use strict";
const Constants = require ("../../../Constants");
const InvoketheFiremindBase = require("../setDDJ/InvoketheFiremind");

class InvoketheFiremind extends InvoketheFiremindBase {
  constructor(game) {
    super(game, "Invoke the Firemind", "Guildpact", "GPT");
  }
}

module.exports = InvoketheFiremind;
