"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CacklingCounterpartBase = require("../setC14/CacklingCounterpart.js");

class CacklingCounterpart extends CacklingCounterpartBase {
  constructor(game) {
    super(game, "Cackling Counterpart", "Innistrad", "ISD");
  }
}

module.exports = CacklingCounterpart;
