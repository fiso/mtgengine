"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProphetofKruphixBase = require("../setCPK/ProphetofKruphix.js");

class ProphetofKruphix extends ProphetofKruphixBase {
  constructor(game) {
    super(game, "Prophet of Kruphix", "Theros", "THS");
  }
}

module.exports = ProphetofKruphix;
