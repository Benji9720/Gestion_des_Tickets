package org.ben.gestion_des_tickets.repositories;

import org.ben.gestion_des_tickets.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}