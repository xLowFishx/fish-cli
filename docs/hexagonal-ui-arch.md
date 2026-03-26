# Hexagonal UI Arch

Mid term, this project should be able to create an structure like the below on any project the user wants

```
src/
├─ app/
│  ├─ router/
│  ├─ providers/
│  ├─ store/
│  └─ main.tsx
│
├─ domain/
│  ├─ user/
│  │  ├─ entities/
│  │  │  └─ User.ts
│  │  ├─ value-objects/
│  │  │  └─ Email.ts
│  │  ├─ repositories/
│  │  │  └─ UserRepository.ts
│  │  └─ services/
│  │     └─ UserDomainService.ts
│  │
│  └─ shared/
│     └─ errors/
│        └─ DomainError.ts
│
├─ application/
│  ├─ user/
│  │  ├─ use-cases/
│  │  │  ├─ get-user-profile/
│  │  │  │  ├─ GetUserProfile.ts
│  │  │  │  ├─ GetUserProfileInput.ts
│  │  │  │  └─ GetUserProfileOutput.ts
│  │  │  └─ update-user-profile/
│  │  │     └─ UpdateUserProfile.ts
│  │  ├─ dto/
│  │  └─ ports/
│  │     ├─ inbound/
│  │     └─ outbound/
│  │        └─ UserRepositoryPort.ts
│  │
│  └─ shared/
│     └─ bus/
│
├─ infrastructure/
│  ├─ api/
│  │  ├─ httpClient.ts
│  │  └─ userApi.ts
│  ├─ repositories/
│  │  └─ HttpUserRepository.ts
│  ├─ mappers/
│  │  └─ UserMapper.ts
│  ├─ services/
│  └─ storage/
│     └─ localStorage.ts
│
├─ ui/
│  ├─ pages/
│  │  └─ user/
│  │     └─ UserProfilePage.tsx
│  ├─ components/
│  │  ├─ common/
│  │  └─ user/
│  ├─ hooks/
│  │  └─ useUserProfile.ts
│  ├─ presenters/
│  │  └─ UserPresenter.ts
│  └─ view-models/
│     └─ UserViewModel.ts
│
├─ shared/
│  ├─ types/
│  ├─ utils/
│  ├─ constants/
│  └─ config/
│
└─ tests/
   ├─ unit/
   ├─ integration/
   └─ e2e/

=== === === === === ===

src/
├─ domain/
├─ application/
├─ infrastructure/
├─ ui/
└─ shared/
```