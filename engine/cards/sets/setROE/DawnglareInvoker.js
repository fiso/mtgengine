"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DawnglareInvokerBase = require("../setC15/DawnglareInvoker.js");

class DawnglareInvoker extends DawnglareInvokerBase {
  constructor(game) {
    super(game, "Dawnglare Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DawnglareInvoker;
