"use strict";
const Zone = require("./Zone");
const Constants = require("../Constants");
const assert = require("assert");

class Battlefield extends Zone {
  constructor (game) {
    super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.BATTLEFIELD);
  }

  get creatures () {
    let creatures = [];
    this._objects.forEach(permanent => {
      if (permanent.isCreature()) {
        creatures.push(permanent);
      }
    });

    return creatures;
  }

  performStateBasedActions () {
    let actionsPerformed = 0;
    this.creatures.forEach(creature => {
      assert(creature.isCreature());

      let shouldDie = false;
      if (creature.hasNonPositiveToughness()) {
        shouldDie = true;
      }
      if (creature.hasLethalDamage() &&
          !creature.hasKeywordAbility(Constants.keywordAbilities.INDESTRUCTIBLE)) {
        shouldDie = true;
      }

      if (shouldDie) {
        creature.die();
        actionsPerformed++;
      }
    });

    return actionsPerformed;
  }

  dealCombatDamage () {
    this.creatures.forEach(creature => {
      if (creature.isAttacking()) {
        // FIXME: Handle damage assignment

        if (creature.blocked) {
          // FIXME: Just deals damage to first blocker,
          // Ignoring both multiple blockers and things like trample etc
          creature._blockers[0].damage(
            creature.power,
            creature._guid,
            creature.hasKeywordAbility(Constants.keywordAbilities.INFECT));
        } else {
          creature.attacking.damage(
            creature.power,
            creature._guid,
            creature.hasKeywordAbility(Constants.keywordAbilities.INFECT));
        }
      }
    });
  }

  resetAttackersAndBlockers () {
    this.creatures.forEach(creature => {
      creature.attacking = null;
      creature.resetBlocking();
    });
  }

  onCleanup () {
    let actionsPerformed = 0;
    this._objects.forEach(permanent => {
      permanent.onCleanup();
    });

    return actionsPerformed;
  }

  getPermanentsControlledByPlayer (player) {
    let permanents = [];
    this._objects.forEach(permanent => {
      if (permanent.isControlledBy(player)) {
        permanents.push(permanent);
      }
    });

    return permanents;
  }

  getPermanentsOwnedByPlayer (player) {
    let permanents = [];
    this._objects.forEach(permanent => {
      if (permanent.isControlledBy(player)) {
        permanents.push(permanent);
      }
    });

    return permanents;
  }
}

module.exports = Battlefield;
