"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GitaxianProbe extends UnimplementedCard {
  constructor (game) {
    super(game, "Gitaxian Probe", "Friday Night Magic 2012", "F12");
  }
}

module.exports = GitaxianProbe;
