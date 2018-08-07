"use strict";
const Constants = require ("../../../Constants");
const MoldgrafMonstrosityBase = require("../setC18/MoldgrafMonstrosity");

class MoldgrafMonstrosity extends MoldgrafMonstrosityBase {
  constructor (game) {
    super(game, "Moldgraf Monstrosity", "Innistrad", "ISD");
  }
}

module.exports = MoldgrafMonstrosity;
